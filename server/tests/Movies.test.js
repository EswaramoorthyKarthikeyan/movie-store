const request = require('supertest')
const moviesForTest = require('./movies.json')

describe('Movies Test', () => {
  beforeAll(() => {
    models = require('../models')
  })
  beforeEach(() => {        
    app = require('../app')
  });

  afterEach(async () => {
      await app.close();
  });

  afterAll(() => {
    models.db.disconnect()
  })


  it('clean up database', done => {
    models.db.movie.remove({}, (err, result) => {
      done()
    })
  })

  it('create data sets', done => {
    var count = 0;
    moviesForTest.forEach(movie => {
      new models.db.movie(movie).save((err, result) => {
        if (err) console.log(err)
        count++
        if (count == moviesForTest.length) {
          done()
        }
      })
    })
  })

  it('filter movies with any location and any language', async () => {
    const res = await request(app)
    .get('/movies/location/any/language/any')
    .send()
    expect(res.statusCode).toEqual(200)
    expect(res.body.length).toEqual(4)
  })

  it('filter movies with any location and ENGLISH language', async () => {
    const res = await request(app)
    .get('/movies/location/any/language/ENGLISH')
    .send()
    expect(res.statusCode).toEqual(200)
    expect(res.body.length).toEqual(2)
  })

  it('filter movies with USA location and ENGLISH language', async () => {
    const res = await request(app)
    .get('/movies/location/USA/language/ENGLISH')
    .send()
    expect(res.statusCode).toEqual(200)
    expect(res.body.length).toEqual(1)
  })

  it('get movie details by id', (done) => {    
    models.db.movie.find({})
    .then(async (movies, err) => {
      const id = movies[0]._id
      const res = await request(app).get(`/movies/id/${id}`)
      .send()
      expect(res.statusCode).toEqual(200)
      expect(res.body._id).toEqual(id.toString())
      done()
    })    
  }) 

  it('get all unique locations from movies', async (done) => {
    const res = await request(app)
    .get('/movies/locations')
    .send()
    expect(res.body).toEqual([ 'USA', 'DENMARK' ])
    done();
  })

  it('get all unique languages from movies', async (done) => {
    const res = await request(app)
    .get('/movies/languages')
    .send()
    expect(res.body).toEqual([ 'ENGLISH', 'DANISH', 'SPANISH' ])
    done();
  })

})
