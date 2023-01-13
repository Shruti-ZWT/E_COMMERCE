const Description = ({ data }) => {
    console.log(data, "data");
  
    return (
      <div className="description">
        <h2>ID:- {data?.id} </h2>
        <h3>Description:- {data?.description} </h3>
      </div>
    );
  };
  
  export default Description;