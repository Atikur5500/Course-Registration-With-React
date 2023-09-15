const Course = ({course}) => {
    const {title, price, credit, description, image} = course;
    console.log(course)
    return (
       <div>
            <div className="card shadow-md border h-full rounded-sm">
                <figure><img className="w-full p-4" src={image} /></figure>
                <div className="card-body p-4">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="flex justify-between gap-x-5 py-2">
                        <p>Price:{price}</p>
                        <p>Credit:{credit}hr</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary rounded-sm w-full">Select</button>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Course;