import React, { PropTypes, Component } from 'react'
import cx from 'classnames'

class Rating extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: false,
      selectedIndex: -1,
    }

    this.getCount = this.getCount.bind(this)
    this.getIcon = this.getIcon.bind(this)
    this.itemMouseEnter = this.itemMouseEnter.bind(this)
    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
  }

  getCount () {
    return this.props.count || 5
  }

  getIcon (index) {
    const className = cx('icon', {
      active: index <= this.props.rating,
      selected: index <= this.state.selectedIndex,
    })

    return (
      <i
        key={index}
        className={className}
        onMouseEnter={this.itemMouseEnter(index)}
        onClick={this.itemClick(index)}
      />
    )
  }

  itemClick (index) {
    return () => {
      this.props.onChange(index)
    }
  }

  itemMouseEnter (index) {
    return () => {
      this.setState({ selectedIndex: index })
    }
  }

  mouseEnter () {
    this.setState({ selected: true })
  }

  mouseLeave () {
    this.setState({ selected: false, selectedIndex: -1 })
  }

  renderIcons () {
    const items = (new Array(this.getCount())).fill(1)

    return items.map((it, index) => this.getIcon(index + 1))
  }

  render () {
    const className = cx('ui huge heart rating', {
      selected: this.state.selected,
    })

    return (
      <div
        className={className}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        {this.renderIcons()}
      </div>
    )
  }
}

Rating.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Rating
