import { mongo } from "mongoose";

const connect = (url: string) => {
  return mongo.connect(url, {
    useUnifiedTopology: true,
  });
};

export default connect;
