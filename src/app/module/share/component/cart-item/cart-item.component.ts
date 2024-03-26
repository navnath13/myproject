import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/State/Cart/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit{

  constructor(private cartService:CartService){}
  @Input() cartItem:any;
  @Input()showButton:any;
  isDeleted=true;

   responseMessage:any;
  @Output() itemDeleted: EventEmitter<any> = new EventEmitter<any>();


  SetQuantity=false;

  item:number=1;
  ngOnInit(): void {

    console.log(this.cartItem)
   
  }


  updateCartItem(num:number): void{
    console.log("click on add quantity")
  this.item=this.item-num;
  if(this.item>1){
    this.SetQuantity=false;
  }else{
    this.SetQuantity=true;
  }
  

  }

  removeCartItem(data:number){
   
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
      
        this.cartService.RemoveCartItem(data).subscribe((response:any)=>{
          console.log(response.message)
          window.location.reload();
          this.responseMessage=response.message
         },(error)=>{
           console.log(Response.error)
         })
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: this.responseMessage.message,
          icon: "success"
        });
        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
    
   
   
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Check if the 'item' input property has changed
    if (changes['cartItem'] && changes['cartItem'].previousValue !== changes['cartItem'].currentValue) {
      this.isDeleted=false;
      console.log('Item changed:', changes['cartItem'].currentValue);
    }
  }
}
