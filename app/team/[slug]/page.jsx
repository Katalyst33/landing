export default function TeamPost({ params }) {
  return (
    <div className="bg-white  text-black rounded-t-3xl ">
      <div className="pt-72 w-11/12 mx-auto">
        <div className="bg-red-500 ">My Post: {params.slug}</div>
      </div>
    </div>
  );
}
