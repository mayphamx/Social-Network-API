const router = require('express').Router();
const {
  getThoughts,
  createThought,
  getSingleThought,
  updateSingleThought,
  deleteSingleThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router
  .route('/')
  // GET all thoughts
  .get(getThoughts)
  // POST a new thought
  // push the created thought's _id to the associated user's thoughts array field
  .post(createThought);

// example data:
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }

// /api/thoughts/thoughtsId
router
  .route('/:thoughtId')
  // GET to get a single thought by its _id
  .get(getSingleThought)
  // PUT to update a thought by its _id
  .put(updateSingleThought)
  // DELETE to remove thought by its _id
  .delete(deleteSingleThought);
  
// /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  // POST to create a reaction stored in a single thought's reactions array field
  .post(addReaction)

// /api/thoughts/:thoughtId/reactions/:reactionId
router
  .route('/:thoughtId/reactions/:reactionId')
  // DELETE to pull and remove a reaction by the reaction's reactionId value
  .delete(removeReaction);

module.exports = router;
