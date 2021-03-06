﻿using EntityLibraryStockChartingApp;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace StockChartingApp.StockExchangeMS.Models
{
    public class StockExchangeContext : DbContext
    {

        public StockExchangeContext([NotNullAttribute] DbContextOptions options) : base(options)
        {
        }

        public StockExchangeContext()
        {
        }
        //Important for many many
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<JoinCompanyBoardMember>().HasKey(jcb => new { jcb.CompanyId, jcb.BoardMemberId });
            modelBuilder.Entity<JoinCompanyStockExchange>().HasKey(jcs => new { jcs.CompanyId, jcs.StockExchangeId });
            modelBuilder.Entity<IPODetails>().HasKey(ipo => new { ipo.RegisteredCompanyId, ipo.RegisteredStockExchangeId });
        }
        public virtual DbSet<StockExchange> StockExchange { get; set; }
        public virtual DbSet<Company> Company { get; set; }
        public virtual DbSet<JoinCompanyStockExchange> JoinCompanyStockExchange { get; set; } 
        public virtual DbSet<IPODetails> IPODetails { get; set; }
        public virtual DbSet<StockPrice> StockPrice { get; set; }
    }
}
