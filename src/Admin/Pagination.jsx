const Pagination = ({totalPosts, postPerPage}) => {
    let pages = [];

    for(let i=1; i<= Math.ceil(totalPosts/postPerPage) ; i++){
        pages.push(i)
    }
    return (
        <>
       {
         pages.map((page,index) => {
            return (
                <button key={index}>{page}</button>
            )
            
            
        })
       }
        
        
        </>
    )
}


export default Pagination;