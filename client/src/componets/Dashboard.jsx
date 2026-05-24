// Dashboard card component
function DashboardCard(props) {

  return (

    // Main card container
    <div className="bg-white rounded-xl shadow-md p-5">

      {/* Card title */}
      <h2 className="text-xl font-bold mb-3">
        {props.title}
      </h2>

      {/* Card value */}
      <p className="text-3xl text-green-500 font-bold">
        {props.value}
      </p>

    </div>
  );
}

// Export component
export default DashboardCard;