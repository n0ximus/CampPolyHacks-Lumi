import "./Tag.css"

export default function Tag({ category, isRant }) {
  return (
    <div className={isRant ? "tag" : "tagPraise"}>
      ★ {category}
    </div>
  )
};