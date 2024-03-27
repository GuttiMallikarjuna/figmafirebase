import React from 'react';

const Orders = () => {
    return (
        <>
         <h1 id='orderhead'>Orders</h1>
         <div className='pendingdiv'>
                <div className='d-flex'>
               
                <p id="pending"> <i className="bi bi-clock-history"></i> &nbsp;&nbsp;Pending</p>
                </div>
                <div>
                <p id="seemore">See more</p>
                </div>
         </div>
         <div className='ordershistory'>
           <div className='order1'>
           <p>Tap on the order to see, Order details and information about the order.</p>
           </div>
           <div className='order2'>
                <div className='d-flex justify-content-between align-items-center' style={{backgroundColor:"#F7F2FA",borderRadius:"20px",gap:"5px",padding:"20px"}}>
                    <div>
                        <h2 style={{fontSize:"35px", fontWeight:"600",lineHeight:"52.5px",color:"#000000"}}>Lisa weaver</h2>
                        <p style={{fontSize:"20px", fontWeight:"400",lineHeight:"30px",color:"#000000"}}>order Id : 34KJSD229DN29</p>
                    </div>
                    <div style={{fontSize:"35px", fontWeight:"600",lineHeight:"52.5px",color:"#B3261E"}}>
                        $20.00
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-center' style={{padding:"10px 20px 10px 20px",gap:"5px"}}>
                    <div style={{fontSize:"25px", fontWeight:"600",lineHeight:"37.5px",color:"#000000"}}>
                        12:00 PM
                    </div>
                    <div style={{fontSize:"30px", fontWeight:"600",lineHeight:"45px",color:"#000000"}}>
                        Paid
                    </div>
                </div>
                <div style={{backgroundColor:"#FFD8E4",width:"100%",padding:"20px", borderRadius:"20px",gap:"30px"}}>
                    <p style={{fontSize:"25px", fontWeight:"600",lineHeight:"37.5px", textAlign:'center' }}>Order preparation is in progress. </p>
                </div>
           </div>
         </div>
        </>
    );
};

export default Orders;