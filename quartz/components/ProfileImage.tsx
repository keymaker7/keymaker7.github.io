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
  justify-content: flex-start;
}
.profile-image {
  width: 100%;
  max-width: 220px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
`

export default (() => ProfileImage) satisfies QuartzComponentConstructor
