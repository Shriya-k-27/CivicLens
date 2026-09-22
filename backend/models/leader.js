import mongoose from "mongoose"

const leaderSchema = new mongoose.Schema(
    {
        name:{
                type: String,
                required: true,
                trim: true
        },
        photo:{
            type: String,
        },
        category:{
            type:String,
            required:true,
            enum:[
                "Cabinet Minister",
                "Minister of State(Independent Charge)",
                "Minister of State"
            ]
        },
        designation:{
            type:String,
            required:true,
            trim:true
        },
        party:{
            type:String,
            required:true,
            trim:true
        },
        constituency:{
            type: String
        },
        state:{
            type:String,
        },
        education:{
            type: String,
        },
        dateOfBirth:{
            type:String
        },
        responsibilities:{
            type:[String]
        },
        previousPositions:{
            type:[String],
        },
        officialGovernmentProfile:{
            type:String
        },
        sourceLinks:[
            {
                title:{
                    type:String,
                    rrequired:true
                },
                url:{
                    type:String,
                    required:true
                }
            }
        ]
    },
    {
        timestamps:true
    }
)

const Leader = mongoose.model("Leader", leaderSchema);

export default Leader;