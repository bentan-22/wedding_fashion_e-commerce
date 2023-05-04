import React, { useState } from 'react'
import { useSelector} from 'react-redux';
import {AiOutlineArrowRight,AiOutlineCamera,AiOutlineDelete,} from "react-icons/ai";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from '../../styles/styles';

const ProfileContent = ({active}) => {
    const { user } = useSelector((state) => state.user);
    const [name, setName] = useState(user && user.name);//if user signed in, name is user.name
    const [email, setEmail] = useState(user && user.email);
    const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
    const [password, setPassword] = useState("");
    const [zipCode,setZipCode] =useState();
    const [address1,setAddress1] =useState("");
    const [address2, setAddress2] =useState("");

    
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <div className="w-full">
        {/* profile */}
        {active === 1 && (
            <> 
            {/* profile image */}
            <div className="flex justify-center w-full">
                <div className="relative">
                    <img
                    // src={`${backend_url}${user?.avatar}`}
                    src="https://ca.slack-edge.com/T0351JZQ0-U043LH90H0Q-18d80470236a-512"
                    className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                    alt=""
                    />
                    <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                        <input
                        type="file"
                        id="image"
                        className="hidden"
                        // onChange={handleImage}
                        />
                        <label htmlFor="image">
                        <AiOutlineCamera />
                        </label>
                    </div>

                </div>
            </div>
            
            <div className="w-full px-5">
                <form onSubmit={handleSubmit} aria-required={true}>
                    {/* name and email input chnages */}
                    <div className="w-full 800px:flex block pb-3">
                        <div className=" w-[100%] 800px:w-[50%]">
                            <label className="block pb-2">Full Name</label>
                            <input
                                type="text"
                                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className=" w-[100%] 800px:w-[50%]">
                            <label className="block pb-2">Email Address</label>
                            <input
                                type="text"
                                className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* phone and password input chnages */}
                    <div className="w-full 800px:flex block pb-3">
                        <div className=" w-[100%] 800px:w-[50%]">
                            <label className="block pb-2">Phone Number</label>
                                <input
                                type="number"
                                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                required
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                        </div>

                        <div className=" w-[100%] 800px:w-[50%]">
                            <label className="block pb-2">Enter your password</label>
                            <input
                            type="password"
                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* zipcode and address1 input chnages */}
                    <div className="w-full 800px:flex block pb-3">
                        <div className=" w-[100%] 800px:w-[50%]">
                            <label className="block pb-2">Zip Code</label>
                                <input
                                type="number"
                                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                required
                                value={phoneNumber}
                                onChange={(e) => setZipCode(e.target.value)}
                                />
                        </div>

                        <div className=" w-[100%] 800px:w-[50%]">
                            <label className="block pb-2">Address 1</label>
                            <input
                            type="address"
                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                            required
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full 800px:flex block pb-3">
                        <div className=" w-[100%] 800px:w-[50%]">
                            <label className="block pb-2">Address 2</label>
                                <input
                                type="address"
                                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                required
                                value={address2}
                                onChange={(e) => setAddress2(e.target.value)}
                                />
                        </div>
                    </div>
                    {/* submit/update button */}
                    <input
                    className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                    required
                    value="Update"
                    type="submit"
                    />
                 
                </form>
            </div>
            </>
        )}
         {/* order page */}
        {active === 2 && (
            <>
            <div>
            <AllOrders/>
            </div>

            </>
        )}
        </div>
    )
}


const AllOrders =()=>{
    const orders=[
        {   
            _id:"644ccfb0a3cabe9c8223404f",
            orderItems:[
                {
                    name: "man suit"
                },
            ],
            totalPrice: 100,
            orderStatus: "Processing",
        },

    ]

    const columns = [
        { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    
        {
          field: "status",
          headerName: "Status",
          minWidth: 130,
          flex: 0.7,
          cellClassName: (params) => {
            return params.getValue(params.id, "status") === "Delivered"
              ? "greenColor"
              : "redColor";
          },
        },
        {
          field: "itemsQty",
          headerName: "Items Qty",
          type: "number",
          minWidth: 130,
          flex: 0.7,
        },
    
        {
          field: "total",
          headerName: "Total",
          type: "number",
          minWidth: 130,
          flex: 0.8,
        },
    
        {
          field: " ",
          flex: 1,
          minWidth: 150,
          headerName: "",
          type: "number",
          sortable: false,
          renderCell: (params) => {
            return (
              <>
                <Link to={`/user/order/${params.id}`}>
                  <Button>
                    <AiOutlineArrowRight size={20} />
                  </Button>
                </Link>
              </>
            );
          },
        },
    ];
    
    const row = [];

    orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "SGD$ " + item.totalPrice,
        status: item.status,
      });
    });

    return(
        <div className="pl-8 pt-1">
            <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
            />
        </div>

    )
}

export default ProfileContent