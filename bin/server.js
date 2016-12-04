require('dotenv').config({ silent: true })

const cluster = require('cluster')
const os = require('os')

const app = require('../app')

const numCPUs = process.env.WORKERS || os.cpus().length + 1
const port = process.env.PORT || 3000


if (cluster.isMaster) {
  process.stdout.write(`server starting on http://localhost:${port}\n`)
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker) => {
    process.stdout.write(`worker #${worker.process.pid} died`)
    cluster.fork()
  })

} else {
  app.listen(port, () => process.stdout.write(`worker #${cluster.worker.id} started\n`))
}
