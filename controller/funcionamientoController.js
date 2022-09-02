var manualFuncionamiento=({});

manualFuncionamiento.agregarEstudiante=(req,res)=>{
    res.render('extra/FuncAgregarEstudiante');
};
manualFuncionamiento.modificarEstudiante=(req,res)=>{
    res.render('extra/FuncModificarEstudiante');
};
manualFuncionamiento.eliminarEstudiante=(req,res)=>{
    res.render('extra/FuncEliminarEstudiante');
};
export{manualFuncionamiento}