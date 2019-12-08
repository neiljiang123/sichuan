import React from 'react';

function ItemImage(props) {
  return <div>
    <img className="printItems" src={props.pic} />
  </div>

}
function Notification(props) {


  // function getCheckedObjects(object){
  //   console.log(props.items);
  //   if (object.checkBoxNumber.match(props.items).length > 0){
  //     console.log("matched");
  //     return ( <div className="displayselected">
  //       <p>{object.name}</p>
  //     </div>)
  //   }
  console.log("print",props.objects)
  return (
    <div className="notification">
      <div>
        <p className='手机顶部通知'>Notification</p>
      </div>
      <div className='parentReminder'>
        <img className='carApproachingDestination' src='https://bit.ly/2Dl2TFH'>
        </img>
        
        <p className='reminder'>Don't Forget Your</p>
      </div>
      <div>
        {props.objects.map(ItemImage)}
      </div>
      <div>
      <img className='payment' src='https://bit.ly/2OLxPEl' ></img>
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ic8j13piAhQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          
        </iframe>


    </div>

  )
}



export default Notification;
