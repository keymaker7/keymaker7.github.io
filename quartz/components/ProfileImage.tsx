import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ProfileImage: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const src = `${baseDir}/static/profile.jpg`
  return (
    <div class={classNames(displayClass, "profile-image-wrapper")}>
      <img src={src} alt="Keymaker" class="profile-image" />
    </div>
  )
}

ProfileImage.css = `
.profile-image-wrapper {
  margin: 0.5rem 0 1rem 0;
  display: flex;
  justify-content: center;
}
.profile-image {
  width: 200px;
  height: 280px;
  border-radius: 12px;
  object-fit: cover;
  object-position: center top;
  border: 1px solid var(--lightgray);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
@media (max-width: 800px) {
  .profile-image-wrapper {
    display: none;
  }
}
`

export default (() => ProfileImage) satisfies QuartzComponentConstructor
