import OpenAI from "openai";
const openai = new OpenAI({apiKey:''}); // Fill out api key here
import { pdfFromPath } from "./pdf";

let APIcall = async (pdfPath) => { 

    let resume = pdfFromPath(pdfPath);
    
    try{
      const completion = await openai.chat.completions.create({
        messages:[
            {"role":"system", "content":"You are a helpful assistant that provides a bulleted summary of resumes provided to you."},
            {"role":"user","content":`${resume}`}

        ],
        model:"gpt-3.5-turbo"
      });
      console.log(completion.choices[0]);
    }catch(err){
      if (err.response) { 
        console.log(err.response.status); 
        console.log(err.response.data); 
      } else { 
        console.log(err.message); 
      } 
    }
};
