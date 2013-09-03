var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Board = new Schema({
	title : String,
	writer : String,
	content : String
});

mongoose.model('board', Board);

var db = mongoose.createConnection('mongodb://localhost/board');
var Board = db.model('board');

exports.index = function(req, res){
  res.render('boardMenu', { title: 'Board Menu' });
};

exports.addBoard = function(req, res){
  res.render('addBoard', { title: 'Add' });
};

exports.boardList = function(req, res){

	Board.findOne({_id : '50874e318cb65fe818000001'}, function(error, data){
		console.log('One Result : ',data);
	});

	Board.find({}, function(error, data){
		console.log(data);
	});
  // res.render('boardList', { title: 'Board List' });
};

exports.saveBoard = function(req, res){

  var board = new Board(req.body);

  board.save(function(error, data){
  	 if(error){
        res.json(error);
    }
    else{
        res.json(data);
    }
  });
};