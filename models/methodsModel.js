const { Pool } = require('pg');

const PG_URI = 'postgres://qjzntuil:HGKpTBEwXUfkVowOfXX-i-z-_smTyvPU@ruby.db.elephantsql.com:5432/qjzntuil';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
