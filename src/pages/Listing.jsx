import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '../firebase.config'
import Spinner from '../components/Spinner'
import shareIcon from '../assets/svg/shareIcon.svg'


function Listing() {
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(true)
    const [shareLinkCopied, setShareLinkCopied] = useState(false)

    const navigate = useNavigate()
    const params = useParams()
    const auth = getAuth()

    useEffect(() => {
        const fetchListing = async () => {
            const docRef = doc(db, 'listings', params.listingId)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setListing(docSnap.data())
                setLoading(false)
            }
        }

        fetchListing()
    }, [navigate, params.listingId])

    if (loading) {
        return <Spinner />
    }

    return (
        <main>
            <h1>
                <title>{listing.name}</title>
            </h1>
            {/* <Swiper slidesPerView={1} >
                {listing.imgUrls.map((url, index) => (
                    <SwiperSlide key={index}>
                        <div
                            style={{
                                background: `url(${listing.imgUrls[index]}) center no-repeat`,
                                backgroundSize: 'cover',
                            }}
                            className='swiperSlideDiv'
                        ></div>
                    </SwiperSlide>
                ))}
            </Swiper> */}

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner swiperSlideDiv">
                    <div className="carousel-item active">
                        <img src={listing.imgUrls[0]} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={listing.imgUrls[1]} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={listing.imgUrls[2]} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div
                className='shareIconDiv'
                onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    setShareLinkCopied(true)
                    setTimeout(() => {
                        setShareLinkCopied(false)
                    }, 2000)
                }}
            >
                <img src={shareIcon} alt='' />
            </div>

            {shareLinkCopied && <p className='linkCopied'>Link Copied!</p>}

            <div className='listingDetails'>
                <p className='listingName'>
                    {listing.name} - $
                    {listing.offer
                        ? listing.discountedPrice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        : listing.regularPrice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
                <p className='listingLocation'>{listing.address}</p>
                <p className='listingType'>
                    For {listing.type === 'rent' ? 'Rent' : 'Sale'}
                </p>
                {listing.offer && (
                    <p className='discountPrice'>
                        ${listing.regularPrice - listing.discountedPrice} discount
                    </p>
                )}

                <ul className='listingDetailsList'>
                    <li>
                        {listing.bedrooms > 1
                            ? `${listing.bedrooms} Bedrooms`
                            : '1 Bedroom'}
                    </li>
                    <li>
                        {listing.bathrooms > 1
                            ? `${listing.bathrooms} Bathrooms`
                            : '1 Bathroom'}
                    </li>
                    <li>{listing.parking && 'Parking Spot'}</li>
                    <li>{listing.furnished && 'Furnished'}</li>
                </ul>


                {auth.currentUser?.uid !== listing.userRef && (
                    <Link
                        to={`/contact/${listing.userRef}?listingName=${listing.name}`}
                        className='primaryButton'
                    >
                        Contact Landlord
                    </Link>
                )}
            </div>
        </main>
    )
}

export default Listing