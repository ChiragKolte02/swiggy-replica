const Shimmer=()=>{
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    return(
        
        <div className="flex flex-wrap">
            {arr.map((index) => (
                <div className="w-[200px] h-[300px] bg-gray-200 m-4 p-4 " key={index} ></div>
            ))}
        </div>
    )
}
export default Shimmer