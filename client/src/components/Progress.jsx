import PropTypes from 'prop-types'

const Progress = ({ percentage }) => {
  return (
    <div class="progress">
      <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: `${percentage}%`}}>{percentage}%</div>
    </div>
  )
}

Progress.propTypes = {
    percentage: PropTypes.number.isRequired
}

export default Progress