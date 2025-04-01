import React from 'react';
import PropTypes from 'prop-types';
import { RangeStepInput } from 'react-range-step-input';
import { roundToOnePlace } from './utils';

export default class AnimationControls extends React.Component {
    render() {
        let startBtnText = 'Start Animation';
        if (this.props.isPlaying) {
            startBtnText = 'Stop Animation';
        }
        let animationSpeed = '';
        if (this.props.stepByDay) {
            animationSpeed =
                this.props.animationRate + ' days/sec';
        } else {
            animationSpeed =
                roundToOnePlace(this.props.animationRate * 3) + ' hrs/sec';
        }

        return (
            <React.Fragment>
                <ul className='list-group'>
                    <li className="list-group-item list-group-item-primary">
                        Animation Controls
                    </li>
                    <button type="button"
                        className="list-group-item list-group-item-action active"
                        onClick={this.props.onStartClick}>
                        <span style={{ textAlign: "center" }}>Press here to<br />{startBtnText}</span>
                    </button>
                    <li className="list-group-item list-group-item-secondary">
                        Animation mode:
                    </li>
                    <li className="list-group-item">
                        <div className="form-check form-switch">
                            <input type="checkbox" className="form-check-input"
                                name="loopDay"
                                onChange={this.props.onChange}
                                checked={this.props.loopDay}
                                disabled={this.props.stepByDay}
                                id="loopDayToggle" />
                            <label className="form-check-label" htmlFor="loopDayToggle">
                                Loop day
                            </label>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <input type="radio" id="continuousRadio"
                            checked={!this.props.stepByDay}
                            onChange={this.onModeChange.bind(this)}
                            name="stepByDay" className="form-check-input me-1" />
                        <label className="form-check-label"
                            htmlFor="continuousRadio">Continuous</label>
                    </li>
                    <li className="list-group-item">
                        <input type="radio" id="stepByDayRadio"
                            checked={this.props.stepByDay}
                            onChange={this.onModeChange.bind(this)}
                            name="stepByDay" className="form-check-input me-1" />
                        <label className="form-check-label"
                            htmlFor="stepByDayRadio">Step by day</label>
                    </li>
                    <li className="list-group-item list-group-item-secondary">
                        Animation speed:<br />{animationSpeed}
                    </li>
                    <li className='list-group-item'>

                        <RangeStepInput className="form-control-range"
                            name="animationRate"
                            min={this.props.stepByDay ? 5 : 0.01}
                            max={this.props.stepByDay ? 122 : 10}
                            step={this.props.stepByDay ? 1 : 0.01}
                            value={this.props.animationRate}
                            onChange={this.props.onChange} />
                    </li>
                </ul>


            </React.Fragment>
        );
    }
    onModeChange(event) {
        const id = event.target.id;
        if (id === 'stepByDayRadio') {
            this.props.onAnimRateUpdate(15);
        } else if (id === 'continuousRadio') {
            this.props.onAnimRateUpdate(1);
        }
        return this.props.onChange(event);
    }
}

AnimationControls.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    animationRate: PropTypes.number.isRequired,
    loopDay: PropTypes.bool.isRequired,
    stepByDay: PropTypes.bool.isRequired,
    onStartClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onAnimRateUpdate: PropTypes.func.isRequired
};
