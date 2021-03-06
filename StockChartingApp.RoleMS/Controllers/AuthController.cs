﻿using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using DtoLibraryStockChartingApp;
using EntityLibraryStockChartingApp;
using Microsoft.AspNetCore.Mvc;
using StockChartingApp.RoleMS.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StockChartingApp.RoleMS.Controllers
{
    [Route("api/rolems")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IRepository<Role> repository;

        public AuthController(IRepository<Role> repository)
        {
            this.repository = repository;
        }

        // GET: api/<AuthController>
        [HttpGet]
        public string Get()
        {
            return "Authorization Microservice for Stock Charting App";
        }

        // GET api/<AuthController>/5
        [HttpPost("adminlogin")]
        public IActionResult AdminPost( InputDetails inputDetails)
        {

            if (!(string.IsNullOrEmpty(inputDetails.Username) || string.IsNullOrEmpty(inputDetails.Password)))
            {
                try
                {
                    var res = repository.AdminLogin(inputDetails.Username, inputDetails.Password);
                    if (res.Item1) return Ok(res.Item2);

                    return Ok(res.Item2);
                }
                catch (Exception ex) { return StatusCode(500, ex.Message); }
            }
            else return BadRequest("Enter Both UserName & Password");
            
        }

        [HttpPost("userlogin")]
        public IActionResult UserPost(InputDetails inputDetails)
        {

            if (!(string.IsNullOrEmpty(inputDetails.Username) || string.IsNullOrEmpty(inputDetails.Password)))
            {
                try
                {
                    var res = repository.UserLogin(inputDetails.Username, inputDetails.Password);
                    if (res.Item1) return Ok(res.Item2);

                    return Ok(res.Item2);
                }
                catch (Exception ex) { return StatusCode(500, ex.Message); }
            }
            else return BadRequest("Enter Both UserName & Password");

        }


        // POST api/<AuthController>
        [HttpPost("signup")]
        public IActionResult Post(Role role)
        {
            if (ModelState.IsValid)
            {
                var isAdded = repository.Signup(role);
                if (isAdded) return Created("Role", role);
                return BadRequest();
            }
            return BadRequest(); 
        }

        // PUT api/<AuthController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AuthController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
