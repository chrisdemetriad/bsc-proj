import React from "react";

const PostAdvert = () => {
	return (
		<form>
			<br />
			<label for="name">Title</label>
			<br />
			<input name="name" type="text" value="Frank" /> <br />
			<br />
			<label for="name">Desc</label>
			<br />
			<textarea cols="30" rows="2">
				Desc
			</textarea>
			<br />
			<label for="email">Email</label>
			<br />
			<input name="email" type="text" value="" />
			<br />
			<label for="phone">Phone</label>
			<br />
			<input name="phone" type="text" value="" />
			<br />
			<label for="price">Price</label>
			<br />
			<input name="price" type="text" value="" />
			<br />
			<label for="postcode">Postcode</label>
			<br />
			<input name="postcode" type="text" value="" />
			<br />
			<label for="city">City</label>
			<br />
			<input name="city" type="text" value="" />
			<br />
			<input checked="checked" name="sex" type="radio" value="male" /> Male
			<br />
			<input name="sex" type="radio" value="female" /> Female
			<br />
			<select>
				<option selected="selected" value="1">
					Will also post
				</option>
				<option value="2">Collection only</option>
			</select>
			<br />
			<input name="swap" type="checkbox" value="1" /> Keen to swap
			<br />
			<br />
			{/* Will also need category. Maybe 2 selects for now?
            Or should the user type and category and subcategory  will show up from an array or obj like: */}
			<button type="submit" value="Submit">
				Submit
			</button>
		</form>
	);
};

export default PostAdvert;
