import dotenv from 'dotenv';

dotenv.config();

export const val: {
  buade_home: string,
} = {
  buade_home: process.env.BUADE_HOME,
}

