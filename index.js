/**
 * Dependencies.
 */

var edge = require('short-edge')
var euclidean = require('euclidean')


/**
 * Return function calculating the state transition rule of an edge.
 *
 * Coordinates should be given in an euclidean space. If not, a distance function
 * should be provided. The coefficient beta is the relative importane of pheromone versus
 * dustance (default 2)
 *
 * @param {Array} coordinates
 * @param {Number?} beta
 * @param {Function?} distance
 * @api public
 */

module.exports = function(coordinates, beta = 2, distance = euclidean) {

  /**
   * Return transition rule given the index of two points
   * as well as a matrix of pheromones for every given coordinates.
   *
   * @param {Number} r
   * @param {Number} s
   * @param {Array} pheromones
   * @return {Number}
   * @api private
   */

  return function(r, s, pheromones) {
    var total = 0
    coordinates.map((point, idx) => {
      if(idx !== r) total += edge(pheromones[r][idx], distance(coordinates(r), coordinates(idx)), beta)
    })
    return edge(pheromones[r][s], distance(coordinates(r), coordinates(s)), beta) / total
  }
}
