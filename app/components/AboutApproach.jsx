
const approach = [
    {
      name: 'Branding',
      description:
        'We thrive on pushing the boundaries of what is possible, constantly seeking new ideas and solutions to drive progress',
      image:'https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709162159/1014358_OJB0DV0_dggfjz.jpg'
    },
    {
      name: 'integrity',
      description:
        'We uphold the highest standards of ethics and integrity in all our interactions, earning the trust and respect of our clients and partners.',
        image:'https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709160893/trust_qavbxk.png'
  
    },
    {
      name: 'Collaboration',
      description:
        'We believe in the power of teamwork and collaboration, fostering an environment where diverse perspectives come together to achieve shared goals.',
        image:'https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709160948/teamwork_1_lpijzh.png'
  
    },
    {
      name: 'Excellence:',
      description:
        'We are committed to delivering excellence in everything we do, striving for perfection and continuous improvement in our work.',
        image:'https://res.cloudinary.com/dqwfjxn8g/image/upload/v1709160985/excellent_rgyyde.png'
  
    },
  ]
  


export default function Example() {
    return (
<section className="bg-gray-50 py-24 ">
<div className="w-5/6 mx-auto">
  <p className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">Our Approach</p>
  <p className=" text-lg mt-2">
  Since 2015, we have been refining our expertise in design and web development here in Nigeria. Throughout this journey, we've come to understand that effective web design goes beyond just showcasing your business—it's about prioritizing the needs and experiences of your customers as well.
  </p>
  <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
  {approach.map((approaches) => (
         
          <div>
          <img
            className="  w-full"
            src={approaches.image}
            alt="Transistor"
            width={1500}
            height={480}
          />
          <p>{approaches.name}</p>
          </div>
            ))}
        
        </div>
  <div className="mt-32 lg:flex justify-center">
    <div className="lg:border-r border-gray-500 px-20 mb-10 lg:mb-0">
      <p className="text-xl font-semibold mb-2">Branding</p>
      <p>Completed solutions</p>
    </div>
    <div className="lg:border-r border-gray-500 px-20 mb-10 lg:mb-0">
      <p className="text-xl font-semibold mb-2">Digital pages</p>
      <p>users of solutions</p>
    </div>
    <div className="px-20">
      <p className="text-xl font-semibold mb-2">Content</p>
      <p>in invoice</p>
    </div>
  </div>
</div>
</section>
  )
}