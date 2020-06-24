import {Link} from 'react-router-dom';
import React, { Component, Stylesheet } from 'react';
//import styles from './styles.css';

class Rules extends React.Component {
    render() {
        
          const titleStyle = {
        //      textAlign: 'center',
        //      fontSize: 50,
          };

          const subtitleStyle = {
        //      fontSize: 30,
        //      paddingLeft: 20,
          };

          const textStyle = {
        //      fontSize: 18,
        //      textIndent: '50px', 
        //      listStylePosition: 'outside',
        //      overflow: 'hidden',
          };

        return (
            <div>
                <h1 style={titleStyle}>How To Play:</h1>
                <h1 style={subtitleStyle}>SETUP:</h1>
                <ul style={textStyle}>
                    <li>5 players, 50 cards (remove 2 of diamonds and 2 of clubs)</li>
                    <li>Assign one person to start as dealer (we can do this at random with the first person that joins etc)</li> 
                    <li>Dealer deals 10 cards uniformly to each player. Each player’s 10 cards is called their stack.</li>
                </ul>
                <h1 style={subtitleStyle}>BIDDING:</h1>
                <ul style={textStyle}>
                    <li>The dealer begins with a minimum bid of 70. If they have good cards, they can bid more.</li>
                    <li>In clockwise direction, every player can either “pass” or beat the last bid. For example, if the dealer begins at 70, in order to bid, the next person must bid 75 at minimum. The next bid always increments by a minimum of 5 points.</li> 
                    <li>Once a player’s bid has been “passed” by every other player, that player now leads this round.</li>
                    <li>Good cards usually means you have a lot of one suit, a lot of points, or a lot of high ranked cards in your stack. If you have good cards, then you can bid. If you win the bidding, you are the leader of this game.</li>
                </ul>
                <h1 style={subtitleStyle}>THE PLAY:</h1>
                <ul style={textStyle}>
                    <li>Once the leader is decided, he/she declares a cutting suit and a partner card. This cutting suit will be the “cutting card” for this game. The partner card will usually be the 2 of spades. If the leader has the 2 of spades, they can choose another partner card strategically. The player with this partner card becomes the leader’s partner. This information remains secret to every player (except the leader’s partner)</li>
                    <li>Together, the leader and his/her partner form the leading team. The remaining three players are the defending team.</li> 
                    <li>The leader begins the game by playing a card from their stack. Every player plays a card in the clockwise direction. After 10 total hands of cards have been played, the players should no longer have cards in their stack. LOOK AT HOW TO WIN A HAND. Count up the points and determine who won this game.</li>
                    <li>After each game, the next player (clockwise direction) becomes the dealer.</li>
                </ul>
                <h1 style={subtitleStyle}>HOW TO WIN A HAND:</h1>
                <ul style={textStyle}>
                    <li>The starting card of the first hand is played by the leader. Every player after the leader plays in a clockwise direction. Whichever player wins the current hand plays the starting card of the next hand.</li>
                    <li>Every player must play a card of the same suit as the starting card. If they do not have a card of the same suit, they either play a garbage card (called a fish) or they can cut the hand with the cutting card. A garbage card can be any other card that is not the same suit or a cutting card. The garbage cards can be methods of giving points to your partner. A cutting card cuts the hand and allows a player to steal the points. To beat a cutting card, the next players must play a cutting card of higher precedence (or the 2 of spades).</li> 
                    <li>The goal is to win every hand with points. Hands without points may also be strategically beneficial to win depending on the play.</li>
                    <li>The 2 of spades can be played at any point in the game. The 2 of spades cannot be the starting card of a hand. If the 2 of spades is played, the player which played the 2 of spades wins that hand.</li>
                    <li>Order of precedence of any suit: Ace, King, Queen, Jack, 10, 9, 8, 7, 6, 5, 4, 3, 2 (2 is only in hearts)</li>
                    <li>Order of overall precedence: 2 of spades, order of precedence of cutting suit, and order of precedence of all the other remaining suits</li>
                </ul>
                <h1 style={subtitleStyle}>HOW TO WIN:</h1>
                <ul style={textStyle}>
                    <li>The goal of the game is to accrue as many points as possible. The leading team wins the game by accruing as many points as they bid. The defending team wins the game by accruing enough points so that the leading team did not make as many points as they bid.</li>
                    <li>Each team counts their points based on the point breakdown.</li>
                    <li>If the leading team’s points are greater than or equivalent to their bid, they win!</li>
                    <li>If the defending team’s points are greater than 120 - the bid, they win!</li>
                    <li>LATER: Add the bid to the total number of points of each player in the winning team and keep a scoreboard.</li>
                </ul>
                <h1 style={subtitleStyle}>POINT BREAKDOWN: (120 total)</h1>
                <ul style={textStyle}>
                    <li>Aces are 10 points</li>
                    <li>10s are 10 points</li>
                    <li>5s are 5 points</li>
                    <li>2 of spades is 20 points</li>
                </ul>
            </div>
        );
    }
}

export default Rules