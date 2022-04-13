import { useState,useRef } from "react";
import { Footer } from "./Footer";
import Heading from "./HeadingInfo";
import { InputInfo } from "./InputInfo";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
const styles = {
    box: {
        width: 350,
        height: 320,
        marginLeft: "38%",
        marginTop: "4%",
        
        
    },

    input: {
        width: "343px",
        height: "40px",
        fontFamily: "arial",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 500,


    },
    padding: {
        marginBottom: 15
    },
    button: {
        cursor: "Pointer",
        width: "352px",
        height: "40px",
        fontFamily: "Poppins",
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: 500,
        marginBottom: 5,
        marginTop: 22,
        color: "black",
        border: "none",
        outline: "none",
        backgroundColor: "#2BE2AB"
    },

    image: {
        width: '30%',
        height: '30%',
        padding: '5px',
    }
}

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px',
        marginLeft: '155px',
        maxWidth: 1200
    },

}));


function BookAccessories() {
    const classes = useStyles();
    let { arr } = useParams();
    let array = [];
    let count = 0;
    for (let i = 0; i < 5; i++) {

        if (arr[i] != "," && arr[i] != undefined) {

            array[count] = parseInt(arr[i]);
            count++;
        }

    }
    let userDetails = localStorage.getItem('activeUser');
    let user = JSON.parse(userDetails);
    let firstName = user.firstName;
    let lastName = user.lastName;
    let tPrice=useRef(0);
    let finalAccessories = [];
    const [totalPrice, setTotalPrice] = useState(0);
    const totalAccessories = [
        {
            id: 1,
            name: "Portable Charger",
            imagePath: "/accessoriesImages/portableCharger.jpg",
            price: 2000,
            information: "Not all new cars have a Type 2 portable charger as standard."
        },
        {
            id: 2,
            name: "Emergency Cable",
            imagePath: "/accessoriesImages/emergencyCable.jpg",
            price: 1000,
            information: "Often you will find Type 1 or Type 2 plugs at the charging station, public charging stations without a cable and just sockets where you can plug in your cable."
        },
        {
            id: 3,
            name: "Adaptor",
            imagePath: "/accessoriesImages/adaptor.jpg",
            price: 1000,
            information: "EVs have different plugs, which can sometimes lead to misunderstandings, depending on the car."
        }


    ]
    array.forEach((e, index) => {

        finalAccessories[index] = totalAccessories[e - 1];
    })


    


    return (<>
        <AppBar position="static" >
            <Toolbar variant="dense" >
                <Link to='/BuyAccessories' style={{ color: 'white' }}> <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <ArrowBackIosNewIcon />
                </IconButton>
                </Link>
            </Toolbar>
        </AppBar>

        <TableContainer component={Paper} className={classes.tableContainer}>
            <Table sx={{ minWidth: 650, backgroundColor:'#ede7f6'}} aria-label="simple table">
                <TableHead>
                    <TableRow>

                        <TableCell sx={{ width: "20%" }}>Nos.</TableCell>
                        <TableCell sx={{ width: "20%" }}>Accessory Name</TableCell>
                        <TableCell sx={{ width: "20%" }}>Image</TableCell>
                        <TableCell sx={{ width: "20%" }}>Price</TableCell>
                        <TableCell sx={{ width: "20%" }}>Quantity</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>


                    {finalAccessories.map((e, index) => {
                        return (
                            <TableRow>
                                <TableCell sx={{ width: "20%" }}>{index + 1}.</TableCell>
                                <TableCell sx={{ width: "20%" }}>{e.name}</TableCell>
                                <TableCell sx={{ width: "20%" }}><img style={styles.image} src={e.imagePath}></img></TableCell>
                                <TableCell sx={{ width: "20%" }}>Rs. {e.price}</TableCell>
                                <TableCell sx={{ width: "20%" }}> <input type="number" name="quantity" onChange={(event) => {

                                    tPrice.current = (event.target.value * e.price)+tPrice.current;
                                    setTotalPrice(tPrice.current);
                                }

                                } /></TableCell>
                            </TableRow>

                        )

                    })}
                    <TableRow>
                        <TableCell sx={{ width: "20%" }}></TableCell>
                        <TableCell sx={{ width: "20%" }}></TableCell>
                        <TableCell sx={{ width: "20%" }}></TableCell>
                        <TableCell sx={{ width: "20%" }}>Total Price :</TableCell>
                        <TableCell sx={{ width: "20%" }}>Rs. {totalPrice}</TableCell>

                    </TableRow>



                </TableBody>
            </Table>
        </TableContainer>
        <form style={styles.box} type="submit" method="GET" action={`/PaymentSection/${arr}/${totalPrice}`}>
            <Heading heading="Book Your Accessories" />
            <div style={styles.padding}>
                <InputInfo data1="First Name" />
                <input style={styles.input}
                    type="text"
                    name="firstName"
                    value={firstName}
                    readOnly
                />
            </div>
            <div style={styles.padding}>
                <InputInfo data1="Last Name" />
                <input style={styles.input}
                    type="text"
                    name="lastName"
                    value={lastName}
                    readOnly
                />
            </div>
            <div style={styles.padding}>
                <InputInfo data1="Shipping Address" data2="* Required Field" />
                <textarea style={styles.input}
                    name="shippingAddress"
                    required="true" placeholder="Enter Shipping Address" />
            </div>



            <button style={styles.button}>Continue</button>

        </form>
        <Footer />
    </>);
}
export default BookAccessories