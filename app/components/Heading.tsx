interface headingTypes {
    heading: string,
    supporting: string,
}
export default function Heading({heading, supporting}:headingTypes) {
  return (
    <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{heading}</h1>
        <p className="leading-7 text-lg">{supporting}</p>
    </div>
  )
}
