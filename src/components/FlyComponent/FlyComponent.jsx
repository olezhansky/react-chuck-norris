import React, { useEffect, useState, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { clearNewJokeAction } from '../../store/jokes/actions';
import classes from './FlyHeader.module.scss';
import store from '../../store/store';
import FlyFavoriteCard from '../FavoriteCards/FlyFavoriteCard/FlyFavoriteCard';

const FlyComponent = ({ newFavoriteJoke }) => {
  const [source, setSource] = useState();
  const [target, setTarget] = useState();
  const targetRef = useRef(target);
  targetRef.current = target;

  useEffect(() => {
    if (!newFavoriteJoke.id) return;
    const sourceEl = document.getElementById(newFavoriteJoke.id);
    setSource(sourceEl?.getClientRects?.()?.[0]);
    const targetEl = document.getElementById(`favorite${newFavoriteJoke.id}`);
    setTarget(targetEl?.getClientRects?.()?.[0]);
  }, [newFavoriteJoke.id]);

  const onEntered = () => {
    setTimeout(() => {
      store.dispatch(clearNewJokeAction());
    }, 600);
  };

  const transitionStyles = {
    entering: {
      opacity: 0.9,
      transition: 'all ease-out 300ms',
      transform: `translateY(${
        targetRef.current?.top - source?.top
      }px) translateX(${targetRef.current?.left - source?.left}px) scaleX(1)`,
    },
    entered: {
      opacity: 0.1,
      transition: 'all ease-out 300ms',
      transform: `translateY(${
        targetRef.current?.top - source?.top
      }px) translateX(${targetRef.current?.left - source?.left}px) scaleX(1)`,
    },
  };

  return (
    <TransitionGroup>
      <CSSTransition
        in
        appear
        addEndListener={
          (node, done) =>
            // eslint-disable-next-line implicit-arrow-linebreak
            node.addEventListener('transitionend', done, false)
          // eslint-disable-next-line react/jsx-curly-newline
        }
        key={newFavoriteJoke.id}
        onEntering={onEntered}
        timeout={300}
      >
        {(state) => (
          <div
            className={classes.FlyHeader}
            style={{
              ...transitionStyles[state],
              top: `${source?.top}px`,
              left: `${source?.left}px`,
              width: `${target?.width}px`,
              // height: `${source?.height}px`,
            }}
          >
            <FlyFavoriteCard newFavoriteJoke={newFavoriteJoke} />
          </div>
        )}
      </CSSTransition>
    </TransitionGroup>
  );
};
export default FlyComponent;

FlyComponent.propTypes = {
  newFavoriteJoke: PropTypes.objectOf.isRequired,
};
