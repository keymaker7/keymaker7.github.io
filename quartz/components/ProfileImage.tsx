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
  margin: 0.3rem 0 0.8rem 0;
  display: flex;
  justify-content: flex-start;
}
.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
}
`

export default (() => ProfileImage) satisfies QuartzComponentConstructor
