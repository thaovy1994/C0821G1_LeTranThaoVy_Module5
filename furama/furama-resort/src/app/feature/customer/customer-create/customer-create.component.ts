import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from '../../../model/customer/customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerList: Customer[] = [];

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  registerFrom = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    gender: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern('(((090)|(091))|((84)(90)|(84)(91)))\\d{7}$')]),
    address: new FormControl('', Validators.required)
  });


  ngOnInit(): void {
  }

  addNewCustomer() {
    const customer = Object.assign({}, this.registerFrom.value);
    this.customerService.createCustomer(customer).subscribe(value => {
    }, error => {
    }, () => {
      this.router.navigateByUrl('/customer-list');
    });
  }
}
