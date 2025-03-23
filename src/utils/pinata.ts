import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiYTEyYTA1My00YzAyLTQ4MzMtYWEwMC0wYzEzYzI4MzljYzIiLCJlbWFpbCI6ImxldmFuaGlldS53b3Jrc3BhY2VAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjhkOTdkOGUyZWJlOWRiZjRhYTYyIiwic2NvcGVkS2V5U2VjcmV0IjoiMzhmNDZkZDVhY2JlYzY2MTIwYzdkZDkzZjM5M2U3NGIyNTJiYjEzMDczNWYzZTM1NjBhNTdhOTNjZWRlY2RjMyIsImlhdCI6MTcxNTY2MTQzOH0.8OeBCPGQS-KAy5gbbHbIIIQU6Gr03nQmZmDBBkzfGlU";
export const pinFileToIPFS = async (file: any, data: any) => {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("pinataMetadata", JSON.stringify(data));

  const pinataOptions = JSON.stringify({
    cidVersion: 0,
  });
  formData.append("pinataOptions", pinataOptions);

  try {
    const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
      maxBodyLength: Infinity,
      headers: {
        "Content-Type": `multipart/form-data; `,
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const uploadToIPFS = async (file: any) => {
  const data = { name: file.name };
  const { IpfsHash } = (await pinFileToIPFS(file, data)) ?? {};

  return IpfsHash;
};
