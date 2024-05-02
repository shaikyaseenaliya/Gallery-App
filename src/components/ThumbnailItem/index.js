// Write your code here.
const ThumbnailItem = props => {
  const {imageDetails, setThumnailId, isActive} = props
  const {thumbnailUrl, id, thumbnailAltText} = imageDetails

  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickThumbnailImage = () => {
    setThumnailId(id)
  }

  return (
    <li className="thumbnail-list-items">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnailImage}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
