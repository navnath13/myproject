export const filter=[
    {
        id:"color",
        name:"Color",
        options:[
            {value :"white", label:"White"},
            {value :"beige", label:"Beige"},
            {value :"blue", label:"Blue"},
            {value :"brown", label:"Brown"},
            {value :"green", label:"Green"},
            {value :"Purple", label:"Purple"},
            {value :"yellow", label:"Yellow"},
           
        ]
    },
    {
        id:"size",
        name:"Size",
        options:[
            {value:"5",label:"5"},
            {value:"M",label:"M"},
            {value:"L",label:"L"},
        ]
    }
]

export const singleFilter=[
    {
        id:"price",
        name:"Price",
        options:[
            {value:"159", label:"159rs to 399rs"},
            {value:"399", label:"399rs to 999rs"},
            {value:"999", label:"999rs to 1999rs"},
            {value:"1999", label:"3999rs to 4999rs"},
        ]
    },
    {
        id:"discount",
        name:"DISCOUNT Range",
        options:[
            {value:"10",label:"10% and above"},
            {value:"20",label:"20% and above"},
            {value:"30",label:"30% and above"},
            {value:"40",label:"40% and above"},
        ]
    },
    
    {
        id:"stock",
        name:"Availability",
        options:[
            {value:"in_stock", label:"In Stock"},
            {value:"out_off_stock", label:"Out of Stock"},
        ]
    }
]