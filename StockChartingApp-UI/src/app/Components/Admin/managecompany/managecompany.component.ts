import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Services/CompanyService/company.service';
import { Company } from 'src/app/Models/CompanyService/company';
import { Stockexchange } from 'src/app/Models/StockExchangeService/stockexchange';
import { Sectordto } from "src/app/Models/CompanyService/sectordto";
import { Ipodto } from "src/app/Models/CompanyService/ipodto";
import { StockExchangeService } from 'src/app/Services/StockExchangeService/stock-exchange.service';
import { SectorService } from 'src/app/Services/SectorService/sector.service';

@Component({
  selector: 'app-managecompany',
  templateUrl: './managecompany.component.html',
  styleUrls: ['./managecompany.component.css']
})
export class ManagecompanyComponent implements OnInit 
{
  comp_list:Company[];
  new_company = new Company();
  new_ipo = new Ipodto();
  existing_ses:Stockexchange[];
  existing_sectors:Sectordto[];
  existing_sector_map = new Map();

  comp_form_state = false;
  ipo_form_state = false;
  delete_form_state = false;
  update_form_state = false;
  origin_form_state = true;

  constructor(private company_service:CompanyService, private sector_service:SectorService, private se_service:StockExchangeService) 
  {    
    company_service.GetAllCompanies().subscribe(res =>
      {
        console.log(res);
        this.comp_list = res;
      }, (err)=>
      {
        console.log(err);
      });
    
    se_service.GetAllStockExchange().subscribe(res => 
    {
      console.log(res);
      this.existing_ses = res;
    }, (err)=>
    {
      console.log(err);
    });

    sector_service.GetAllSectors().subscribe(res => 
      {
        console.log(res);
        this.existing_sectors = res;
        res.forEach(element => 
        {
          this.existing_sector_map.set(element.id, element.sectorName);
        });
      }, (err)=>
      {
        console.log(err);
      });
  }

  ngOnInit(): void {
  }

  public AddNewCompany()
  {
    this.company_service.AddNewCompany(this.new_company).subscribe( comp_res =>
    {
      console.log(comp_res);
      this.new_ipo.registeredCompanyId = comp_res.id;
      this.company_service.AddCompanyIPO(this.new_ipo).subscribe( ipo_res => 
        {
          console.log(ipo_res);
        }, (err) => 
        {
          console.log(err); alert(err["error"])
        });
        window.location.reload();
        alert("Company Added Successfully")
    }, (err) => 
    {
      console.log(err); alert(err["error"])
    });
  }

  public UpdateExistingCompany()
  {
    this.company_service.UpdateCompany(this.new_company).subscribe( res => 
      {
        console.log(res);
        window.location.reload();
        alert("Company Updated Successfully");
      }, (err) => 
      {
        console.log(err); alert(err["error"])
      });
  }

  public DeleteCompany()
  {
    this.company_service.DeleteCompany(this.new_company.id).subscribe( res => 
      {
        console.log(res);
        window.location.reload();
        alert("Company Deleted Successfully");
      }, (err) => 
      {
        console.log(err); alert(err["error"])
      });
  }

  public AddIPOForm()
  {
    this.comp_form_state = false;
    this.ipo_form_state = true;
    this.delete_form_state = false;
    this.update_form_state = false;
    this.origin_form_state = false;
    this.new_ipo = new Ipodto();
  }

  public AddCompanyForm(flag:boolean = true)
  {
    this.comp_form_state = true;
    this.ipo_form_state = false;
    this.delete_form_state = false;
    this.update_form_state = false;
    this.origin_form_state = false;
    if(flag) {this.new_company = new Company();}
  }

  public Origin()
  {
    this.comp_form_state = false;
    this.ipo_form_state = false;
    this.delete_form_state = false;
    this.update_form_state = false;
    this.origin_form_state = true;
  }

  public UpdateCompanyForm()
  {
    this.comp_form_state = false;
    this.ipo_form_state = false;
    this.delete_form_state = false;
    this.update_form_state = true;
    this.origin_form_state = false;
    this.new_company = new Company();
  }

  public DeleteCompanyForm()
  {
    this.comp_form_state = false;
    this.ipo_form_state = false;
    this.delete_form_state = true;
    this.update_form_state = false;
    this.origin_form_state = false;
    this.new_company = new Company();
  } 

}
