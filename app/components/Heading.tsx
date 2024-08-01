interface headingTypes {
    heading: string,
    supporting: string,
}
export default function Heading({heading, supporting}:headingTypes) {
  return (
    <div>
        <h1 className="">{heading}</h1>
        <p className="">{supporting}</p>
    </div>
  )
}
