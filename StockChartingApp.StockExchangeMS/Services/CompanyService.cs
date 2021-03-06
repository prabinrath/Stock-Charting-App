﻿using EntityLibraryStockChartingApp;
using StockChartingApp.StockExchangeMS.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockChartingApp.StockExchangeMS.Services
{
    public class CompanyService
    {
        private IRepository<Company> repository;

        public CompanyService(IRepository<Company> repository)
        {
            this.repository = repository;
        }

        public Company Get(int Id)
        {
            return repository.Get(Id);
        }
    }
}
