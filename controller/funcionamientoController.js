var manualFuncionamiento=({});

manualFuncionamiento.agregarEstudiante=(req,res)=>{
    res.render('manuals/FuncAgregarEstudiante');
};
manualFuncionamiento.modificarEstudiante=(req,res)=>{
    res.render('manuals/FuncModificarEstudiante');
};
manualFuncionamiento.eliminarEstudiante=(req,res)=>{
    res.render('manuals/FuncEliminarEstudiante');
};
export{manualFuncionamiento}