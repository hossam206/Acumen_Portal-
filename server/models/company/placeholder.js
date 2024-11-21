const placeholderSchema = new mongoose.Schema({
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
    },
    shName: String,
    numberOfShares: Number,
    shareClass: String,
});


export default mongoose.model("Placeholder", placeholderSchema);