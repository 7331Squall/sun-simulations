import React from 'react';
import PropTypes from 'prop-types';

export default class GeneralSettings extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-primary">
                        General Settings
                    </li>
                    <li className="list-group-item">
                        <div className='form-check form-switch'>
                            <input type="checkbox" className="form-check-input"
                                name="showDeclinationCircle"
                                onChange={this.props.onInputChange}
                                checked={this.props.showDeclinationCircle}
                                id="showDeclinationCircleToggle"
                            />
                            <label className="form-check-label"
                                htmlFor="showDeclinationCircleToggle" >
                                Show the sun&apos;s declination circle
                            </label>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="form-check form-switch">
                            <input type="checkbox" className="form-check-input"
                                name="showEcliptic"
                                onChange={this.props.onInputChange}
                                checked={this.props.showEcliptic}
                                id="showEclipticToggle" />
                            <label className="form-check-label" htmlFor="showEclipticToggle">
                                Show the ecliptic
                            </label>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="form-check form-switch">
                            <input type="checkbox" className="form-check-input"
                                name="showMonthLabels"
                                onChange={this.props.onInputChange}
                                checked={this.props.showMonthLabels}
                                id="showMonthLabelsToggle" />
                            <label className="form-check-label" htmlFor="showMonthLabelsToggle">
                                Show month labels
                            </label>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="form-check form-switch">
                            <input type="checkbox" className="form-check-input"
                                name="showUnderside"
                                onChange={this.props.onInputChange}
                                checked={this.props.showUnderside}
                                id="showUndersideToggle" />
                            <label className="form-check-label" htmlFor="showUndersideToggle">
                                Show underside of celestial sphere
                            </label>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="form-check form-switch">
                            <input type="checkbox" className="form-check-input"
                                name="showStickfigure"
                                onChange={this.props.onInputChange}
                                checked={this.props.showStickfigure}
                                id="showStickfigureToggle" />
                            <label className="form-check-label" htmlFor="showStickfigureToggle">
                                Show stickfigure and its shadow
                            </label>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="form-check form-switch">
                            <input type="checkbox" className="form-check-input"
                                name="showApparentSunMovement"
                                onChange={this.props.onInputChange}
                                checked={this.props.showApparentSunMovement}
                                id="showApparentSunMovementToggle" />
                            <label className="form-check-label" htmlFor="showApparentSunMovementToggle">
                                Show apparent sun movement
                            </label>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="form-check form-switch">
                            <input type="checkbox" className="form-check-input"
                                onChange={this.props.onInputChange}
                                checked={this.props.showAnalemma}
                                name="showAnalemma" id="showAnalemma" />
                            <label className="form-check-label"
                                htmlFor="showAnalemma">
                                Show analemma
                            </label>
                        </div>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

GeneralSettings.propTypes = {
    showDeclinationCircle: PropTypes.bool.isRequired,
    showEcliptic: PropTypes.bool.isRequired,
    showMonthLabels: PropTypes.bool.isRequired,
    showUnderside: PropTypes.bool.isRequired,
    showStickfigure: PropTypes.bool.isRequired,
    showApparentSunMovement: PropTypes.bool.isRequired,
    showAnalemma: PropTypes.bool.isRequired,
    onInputChange: PropTypes.func.isRequired
};
