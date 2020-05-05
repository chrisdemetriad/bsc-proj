import React from "react";

const PostAdvert = () => {
	return (
		<form>
			<label for="name">Name</label>
			<br />
			<input name="name" type="text" value="Frank" /> <br />
			<input checked="checked" name="sex" type="radio" value="male" /> Male <br />
			<input name="sex" type="radio" value="female" /> Female <br />
			<textarea cols="30" rows="2">
				Long text.
			</textarea>
			<br />
			<select>
				<option selected="selected" value="1">
					Yes
				</option>
				<option value="2">No</option>
			</select>
			<br />
			<input name="democheckbox" type="checkbox" value="1" /> Checkbox
			<br />
			<button type="submit" value="Submit">
				Submit
			</button>
		</form>
	);
};

export default PostAdvert;
