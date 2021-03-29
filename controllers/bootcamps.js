exports.getBootcamps=(req,res,next)=>{res.status(200).json({success:true,msg:'show all bootcamp'})}
exports.getBootcamp=(req,res,next)=>{   res.status(200).json({success:true,msg:`show all bootcamp ${req.params.id}`})}
exports.updateBootcamp=(req,res,next)=>{   res.status(200).json({success:true,msg:`update bootcamp ${req.params.id}`})}
exports.createBootcamp=(req,res,next)=>{   res.status(200).json({success:true,msg:`create bootcamp `})}
exports.deleteBootcamp=(req,res,next)=>{   res.status(200).json({success:true,msg:`delete bootcamp ${req.params.id}`})}
