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
 */

module.exports = function(coordinates, beta, distance) {
  beta = beta || 2
  distance = distance || euclidean
  return function(r, s, pheromones) {
    return edge(pheromone, distance(coordinates(r), coordinates(s)), beta) / ()
  }
}
