const express =require("express");
const invoicesse = require("../model/Facture");

// creation invoices
const creeInvoices = async(req,res)=>{
    const {name,amount,status,description , fournisseurId} = req.body;

    const {id} = req.user;
    

    const facture = invoicesse.create({
        name,
        userId :id,
        fournisseurId,
        description,
        amount,
        status,
        dueDate,
    })
    return res.status(201).json(facture);
}

module.exports = {
    creeInvoices,
}