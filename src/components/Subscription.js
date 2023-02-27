

const Subscription = () => {
  return (
    
 <div className=" subscription container sm:px-5 mx-auto py-10">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    <div className="member flex flex-col
     gap-5">
        <h2 className="text-xl font-semibold">530</h2>
        <hr className="border border-gray-400 w-full"/>
        <p className="text-xl tracking-wider capitalize">Member</p>
    </div>
    <div className="co-works flex flex-col
     gap-5">
        <h2 className="text-xl font-semibold">60</h2>
        <hr className="border border-gray-400 w-full"/>
        <p className="text-xl tracking-wider capitalize">co-works spaces</p>
    </div>
    <div className="member-bars flex flex-col
     gap-5">
        <h2 className="text-xl font-semibold">3</h2>
        <hr className="border border-gray-400 w-full"/>
        <p className="text-xl tracking-wider capitalize">member's bars</p>
    </div>
  </div>
 </div>
  )
}

export default Subscription